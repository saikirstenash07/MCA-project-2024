package com.spbank.bankbackendjwt1.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AccountTransactionsDto {

    private String transactionId;


    private Date transactionDt;

    private String transactionSummary;


    private String transactionType;

    private int transactionAmt;


    private int closingBalance;


    private String createDt;

}
