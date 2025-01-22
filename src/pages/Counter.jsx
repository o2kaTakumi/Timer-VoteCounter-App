import React, { useState } from "react";

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

import VoteResult from "../components/VoteResult";

import '../styles/Counter.css';

const Transition = React.forwardRef (
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

function Counter() {
  const [oneVoteAgree, setOneVoteAgree] = useState(''); //賛成1票の人数
  const [twoVoteAgree, setTwoVoteAgree] = useState(''); //賛成2票の人数
  const [threeVoteAgree, setThreeVoteAgree] = useState(''); //賛成3票の人数

  const [agreePeople, setAgreePeople] = useState(0); //賛成した人数の合計
  const [agree, setAgree] = useState(0); //賛成票数の合計

  const [oneVoteDisagree, setOneVoteDisagree] = useState(''); //反対1票の人数
  const [twoVoteDisagree, setTwoVoteDisagree] = useState(''); //反対2票の人数
  const [threeVoteDisagree, setThreeVoteDisagree] = useState(''); //反対3票の人数

  const [disagreePeople, setDisagreePeople] = useState(0); //反対した人数の合計
  const [disagree, setDisagree] = useState(0); //反対票数の合計

  const [gicho, setGicho] = useState(''); //議長委任票数の管理

  //完全多数決の結果の初期化
  const [result, setResult] = useState('同数'); 
  // localStorage.setItem('Result', result);

  //単純多数決の結果の初期化
  const [simpleResult, setSimpleResult] = useState('同数');
  // localStorage.setItem('SimpleResult', simpleResult);

  //ダイアログの表示の管理 true->表示中 false->非表示
  const [open, setOpen] = useState(false);

  //場内票数
  const [jounai, setJounai] = useState('');

  //場内票数のTextFieldの変更可能状態
  const [jounaiText, setJounaiText] = useState('disabled');

  //場内票数の変更ボタンの見た目
  const [jounaiChangeButton, setJounaiChangeButton] = useState('outlined');

  //場内変数の変更ボタンの機能
  const ChangeJounaiText = () => {
    if(jounaiText === 'disabled') {
      setJounaiText('');
      setJounaiChangeButton('contained');
    } else {
      setJounaiText('disabled');
      setJounaiChangeButton('outlined');
    }
  }

  //ダイアログを開く操作
  const handleClickOpen = () => {
    setOpen(true);
  };

  //ダイアログの警告でキャンセルした時の処理
  const handleClose = () => {
    setOpen(false);
  };

  //ダイアログの警告に同意した時の処理
  const agreeDialog = () => {
    setOneVoteAgree('');
    setTwoVoteAgree('');
    setThreeVoteAgree('');

    setOneVoteDisagree('');
    setTwoVoteDisagree('');
    setThreeVoteDisagree('');

    setAgreePeople(0);
    setAgree(0);

    setDisagreePeople(0);
    setDisagree(0);

    setResult('同数');
    // localStorage.setItem('Result', result);

    setSimpleResult('同数');
    // localStorage.setItem('SimpleResult', simpleResult);

    setOpen(false);
  }

  const Vote = () => {
    const pattern = /^([0-9]\d*|)$/;
    if(!pattern.test(oneVoteAgree) || !pattern.test(twoVoteAgree) || !pattern.test(threeVoteAgree) || !pattern.test(oneVoteDisagree) || !pattern.test(twoVoteDisagree) || !pattern.test(threeVoteDisagree)) {
      alert('入力は以下の要件を満たしてください\n ・半角\n ・1以上の整数');
    } else {
      const agreeSum = Number(oneVoteAgree) + 2 * Number(twoVoteAgree) + 3 * Number(threeVoteAgree);
      const disagreeSum = Number(oneVoteDisagree) + 2 * Number(twoVoteDisagree) + 3 * Number(threeVoteDisagree);

      const simpleAgreeSum = Number(oneVoteAgree) + Number(twoVoteAgree) + Number(threeVoteAgree);
      const simpleDisagreeSum = Number(oneVoteDisagree) + Number(twoVoteDisagree) + Number(threeVoteDisagree);
      
      if(Number(jounai) < agreeSum + disagreeSum) {
        alert("合計票数が場内票数を超えています");
      } else if(!pattern.test(jounai)) {
        alert('入力は以下の要件を満たしてください\n ・半角\n ・1以上の整数\n\n 箇所：場内票数');
      } else {
        if(agreeSum > disagreeSum) {
          setAgree(agreeSum + Number(gicho));
          setDisagree(disagreeSum);
          setResult('可決');
        } else if(agreeSum < disagreeSum) {
          setAgree(agreeSum);
          setDisagree(disagreeSum + Number(gicho));
          setResult('否決');
        } else {
          setAgree(agreeSum);
          setDisagree(disagreeSum);
          setResult('同数');
        }
        setAgreePeople(simpleAgreeSum);
        setDisagreePeople(simpleDisagreeSum);
        if(simpleAgreeSum > simpleDisagreeSum) {
          setSimpleResult('可決')
        } else if(simpleAgreeSum < simpleDisagreeSum) {
          setSimpleResult('否決');
        } else {
          setSimpleResult('同数');
        }
        // localStorage.setItem('Result', result);
        // localStorage.setItem('SimpleResult', simpleResult);
      }
    }
  }

  return (
    <div className="CounterModules">
      <h1 className="VoteTitle">採決</h1>
      <div className="Vote">
        <TextField variant="filled" size="small" label="賛成1票" value={oneVoteAgree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setOneVoteAgree(e.target.value) } />
        <TextField variant="filled" size="small" label="反対1票" value={oneVoteDisagree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setOneVoteDisagree(e.target.value) } />
        <TextField variant="filled" size="small" label="賛成2票" value={twoVoteAgree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setTwoVoteAgree(e.target.value) }/>
        <TextField variant="filled" size="small" label="反対2票" value={twoVoteDisagree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setTwoVoteDisagree(e.target.value) } />
        <TextField variant="filled" size="small" label="賛成3票" value={threeVoteAgree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setThreeVoteAgree(e.target.value) } />
        <TextField variant="filled" size="small" label="反対3票" value={threeVoteDisagree} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setThreeVoteDisagree(e.target.value) } />
        <TextField variant="outlined" label="議長委任票" value={gicho} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setGicho(e.target.value) } />
        <div className="VoteButtonGroup">
          <Button size="small" variant="contained" onClick={Vote}>採決</Button>
          <Button size="small" className="ResetButton" variant="outlined" onClick={handleClickOpen}>リセット</Button>
        </div>
        <div>
          <TextField label="場内票数" disabled={jounaiText} value={jounai} onKeyDown={ e => { if(e.code === 'Enter') { e.target.blur(); } } } onChange={ (e) => setJounai(e.target.value) } />
          <Button variant={jounaiChangeButton} onClick={ChangeJounaiText} >場内票数変更</Button>
        </div>
      </div>
      <div className="Result">
        <div>
          <h2 className="Card">完全多数決</h2>
          <h2 className="Num">賛成 : {agree}</h2>
          <h2 className="Num">反対 : {disagree}</h2>
          <VoteResult ID={result} />
        </div>
        <div>
          <h2 className="Card">単純多数決</h2>
          <h2 className="Num">賛成 : {agreePeople}</h2>
          <h2 className="Num">反対 : {disagreePeople}</h2>
          <VoteResult ID={simpleResult} />
        </div>
      </div>
      {/* リセットボタンのダイアログ */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"票の入力状況をリセットしますか?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            この操作は元に戻すことはできません
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={agreeDialog} autoFocus>はい</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Counter;