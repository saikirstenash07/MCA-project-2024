package com.spbank.bankbackendjwt1.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Accounts {

	@Id
	private Long account_id ;

	@Column(name="account_number")
	private Long accountNumber;

	@Column(name="account_type")
	private String accountType;

	@Column(name = "branch_address")
	private String branchAddress;

	@Column(name = "create_dt")
	private String createDt;


	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name="user_id")
	private User user ;


	@OneToMany(mappedBy = "accounts",cascade = CascadeType.ALL)
	private List<AccountTransactions> accountTransactions ;


}
