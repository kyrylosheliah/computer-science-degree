package com.example.lab5_1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    TextView tvOut;
    Button btnOk;
    Button btnCancel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tvOut = (TextView) findViewById(R.id.tvOut);
        btnOk = (Button) findViewById(R.id.btnOk);
        btnCancel = (Button) findViewById(R.id.btnCancel);
        View.OnClickListener oclBtnOk = new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                tvOut.setText("Натиснута кнопка ОК");
            }
        };
        btnOk.setOnClickListener(oclBtnOk);
        View.OnClickListener oclBtnCancel = new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                tvOut.setText("Натиснута кнопка Cancel");
            }
        };
        btnCancel.setOnClickListener(oclBtnCancel);
    }
}