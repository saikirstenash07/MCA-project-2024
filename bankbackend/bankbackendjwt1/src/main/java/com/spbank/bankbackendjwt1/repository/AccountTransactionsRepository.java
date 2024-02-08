package com.spbank.bankbackendjwt1.repository;

import java.util.List;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spbank.bankbackendjwt1.model.AccountTransactions;






@Repository
public interface AccountTransactionsRepository extends CrudRepository<AccountTransactions, Long> {
	
	List<AccountTransactions> findByUserIdOrderByTransactionDtDesc(Long customerId);

}
