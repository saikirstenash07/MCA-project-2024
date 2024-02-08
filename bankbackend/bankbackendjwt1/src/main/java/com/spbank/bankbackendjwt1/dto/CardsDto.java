package com.spbank.bankbackendjwt1.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CardsDto {

    private int cardId;



    private String cardNumber;

    private String cardType;


    private int totalLimit;


    private int amountUsed;


    private int availableAmount;


    private Date createDt;
}
