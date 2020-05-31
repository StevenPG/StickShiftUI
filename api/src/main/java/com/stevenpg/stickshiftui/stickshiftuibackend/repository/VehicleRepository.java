package com.stevenpg.stickshiftui.stickshiftuibackend.repository;

import com.stevenpg.stickshiftui.stickshiftuibackend.controller.Vehicle;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VehicleRepository extends CrudRepository<Vehicle, Long> {
    List<Vehicle> findByNickname(String nickname);
    Vehicle findById(long id);
}
