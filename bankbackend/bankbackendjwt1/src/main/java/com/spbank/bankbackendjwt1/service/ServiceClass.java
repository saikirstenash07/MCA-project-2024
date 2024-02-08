package com.spbank.bankbackendjwt1.service;

import com.spbank.bankbackendjwt1.dto.AccountTransactionsDto;
import com.spbank.bankbackendjwt1.dto.AccountsDto;
import com.spbank.bankbackendjwt1.dto.CardsDto;
import com.spbank.bankbackendjwt1.dto.LoansDto;
import com.spbank.bankbackendjwt1.model.*;
import com.spbank.bankbackendjwt1.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ServiceClass {

    @Autowired
    private UserRepository userRepository ;

    @Autowired
    private AccountsRepository accountsRepository ;

    @Autowired
    private AccountTransactionsRepository accountTransactionsRepository;

    @Autowired
    private CardsRepository cardsRepository ;

    @Autowired
    private LoanRepository loanRepository;

//    @Transactional
//    public void addUserWithUserInfo(String username, String email, String password, String mobileNo) {
//        // Create User instance
//        User user = new User(username, email, password);
//
//        // Create UserInfo instance
//        UserInfo userInfo = new UserInfo(mobileNo);
//
//        // Associate UserInfo with User
//        user.setUserInfo(userInfo);
//        userInfo.setUser(user);
//
//        // Save User and UserInfo to the database
//        userRepository.save(user);
//        System.out.println("Done");
//    }

    @Transactional
public AccountsDto getAccountData(Long id){
      Accounts accounts =  accountsRepository.findByUserId(id) ;
      return accounts == null ? null  :  new AccountsDto(accounts.getAccount_id(),accounts.getAccountNumber(),accounts.getAccountType(),accounts.getBranchAddress(),accounts.getCreateDt()) ;
}


    @Transactional
    public List<AccountTransactionsDto> getTransactionData(Long id) {
        List<AccountTransactions> accountTransactionsList = accountTransactionsRepository.findByUserIdOrderByTransactionDtDesc(id);

        return  accountTransactionsList.isEmpty() ? null :
                accountTransactionsList.stream()
                        .map(at -> new AccountTransactionsDto(
                                at.getTransactionId(),
                                at.getTransactionDt() ,
                                at.getTransactionSummary(),
                                at.getTransactionType(),
                                at.getTransactionAmt(),
                                at.getClosingBalance() ,
                                at.getCreateDt()
                               ))
                        .collect(Collectors.toList());
    }
    @Transactional
    public List<CardsDto> getCardsData(Long id) {
        List<Cards> cardsList = cardsRepository.findByUserId(id);

        return  cardsList.isEmpty() ? null :
                cardsList.stream()
                .map(card -> new CardsDto(
                        card.getCardId(), card.getCardNumber(), card.getCardType(),
                        card.getTotalLimit(), card.getAmountUsed(), card.getAvailableAmount(), card.getCreateDt()))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<LoansDto> getLoansData(Long id){
        List<Loans>  loansList = loanRepository.findByUserIdOrderByStartDtDesc(id);

        return  loansList.isEmpty() ? null :
                loansList.stream()
                        .map(loans -> new LoansDto(
                                loans.getLoanNumber(),loans.getStartDt(),loans.getLoanType(),loans.getTotalLoan(),loans.getAmountPaid(),loans.getOutstandingAmount(),
                                loans.getCreateDt()
                                ))
                        .collect(Collectors.toList());


    }
}
