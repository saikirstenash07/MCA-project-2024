package com.spbank.bankbackendjwt1.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AccountsDto {

    private Long account_id ;

    private Long accountNumber;


    private String accountType;


    private String branchAddress;

    private String createDt;
}
