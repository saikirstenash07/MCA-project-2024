package com.spbank.bankbackendjwt1.repository;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.spbank.bankbackendjwt1.model.Accounts;



@Repository
public interface AccountsRepository extends CrudRepository<Accounts, Long> {
	
	Accounts findByUserId(Long customerId);

}
