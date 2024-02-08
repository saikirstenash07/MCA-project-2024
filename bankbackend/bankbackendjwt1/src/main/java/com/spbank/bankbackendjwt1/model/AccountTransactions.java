package com.spbank.bankbackendjwt1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="account_transactions")
public class AccountTransactions {
	@Id
	@Column(name = "transaction_id")
	private String transactionId;

	@Column(name="transaction_dt")
	private Date transactionDt;

	@Column(name = "transaction_summary")
	private String transactionSummary;

	@Column(name="transaction_type")
	private String transactionType;

	@Column(name = "transaction_amt")
	private int transactionAmt;

	@Column(name = "closing_balance")
	private int closingBalance;

	@Column(name = "create_dt")
	private String createDt;




	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "account_number")
	private Accounts accounts ;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user ;
	
}
