package com.spbank.bankbackendjwt1.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @Column(name = "user_id")
	  private Long id;

	  @NotBlank
	  @Size(max = 20)
	  private String username;

	  @NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;

	  @NotBlank
	  @Size(max = 120)
	  private String password;

//===============Mapping====================//

	  @OneToOne(mappedBy = "user" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL, optional = false)
	  private UserInfo userInfo ;


	@ManyToMany
	@JoinTable(
			name = "user_roles",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id")
	)
	 private Set<Role> roles = new HashSet<>();

	 @OneToOne(mappedBy = "user" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL,optional = false)
	  private Accounts accounts ;

	 @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	 private List<AccountTransactions> accountTransactions ;

	 @OneToMany(mappedBy ="user" ,cascade = CascadeType.ALL)
	 private List<Cards> cards ;

	 @OneToMany(mappedBy ="user" ,cascade = CascadeType.ALL)
	 private List<Loans> loans ;




	  public User(String username, String email, String password) {
		    this.username = username;
		    this.email = email;
		    this.password = password;
	  }
    
}