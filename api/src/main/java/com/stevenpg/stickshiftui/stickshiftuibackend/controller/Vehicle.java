package com.stevenpg.stickshiftui.stickshiftuibackend.controller;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /**
     * Higher-order details
     */
    private String make;
    private String model;
    private String trim;
    private String nickname;

    // Defaulted values within the UI
    private int maxRPM;
    private int maxMPH;

    private double firstGearRatio;
    private double secondGearRatio;
    private double thirdGearRatio;
    private double fourthGearRatio;
    private double fifthGearRatio;
    private double sixthGearRatio;

    private double finalDriveRatio;
    private double tireDiameter;

    // AAA/BBRCC
    // This should calculate tireDiameter before saving
    private String tireDetails;

}
