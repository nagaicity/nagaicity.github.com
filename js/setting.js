/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};
var UseData = UseData || {};

//OpenSpending.identifier = 'nagai_budget_2014';
//OpenSpending.year = '2014';

UseData.identifier = 'nagai_budget_2014';
UseData.year = '2014';


		var url = location.href;
		var params = url.split("?");
		var paramms = [];
		//if( params.length >= 1 ) {

        if( params.length >= 2 ) {
			paramms = params[1].split("&");
		}

		var paramArray = [];
		for ( i = 0; i < paramms.length; i++ ) {
	    	var item = paramms[i].split("=");
	    	paramArray.push(item[0]);
	    	paramArray[item[0]] = item[1];
		}
/*
		if( paramArray["requestYear"] != null  && paramArray["requestName"] != null ) {
			UseData.year = paramArray["requestYear"];
			UseData.identifier = paramArray["requestName"];
		}else {
			UseData.year = "2014";
			UseData.identifier = "nagai_budget_2014";
		}
*/

		if( paramArray["requestYear"] != null) {
			UseData.year = paramArray["year"];
		}else {
			UseData.year = "2014";
		}

	switch(UseData.year){
		case 2014:
			UseData.identifier = "nagai_budget_2014";
			break;
		case 2013:
			UseData.identifier = "nagai_budget_2013";
			break;
		default:
			UseData.identifier = "nagai_budget_2014";
			break;
	}

OpenSpending.identifier = UseData.identifier;
OpenSpending.year = UseData.year;



alert(OpenSpending.identifier);
alert(OpenSpending.year);

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* nag cofog */
  '20130100': { icon: 'icons/nagai/1-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130110': { icon: 'icons/nagai/1-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130200': { icon: 'icons/nagai/2-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130210': { icon: 'icons/nagai/2-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130220': { icon: 'icons/nagai/3-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130230': { icon: 'icons/nagai/4-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130240': { icon: 'icons/nagai/5-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130250': { icon: 'icons/nagai/6-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130260': { icon: 'icons/nagai/7-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130300': { icon: 'icons/nagai/8-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130310': { icon: 'icons/nagai/8-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130320': { icon: 'icons/nagai/9-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130330': { icon: 'icons/nagai/10-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20130400': { icon: 'icons/nagai/11-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20130410': { icon: 'icons/nagai/11-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20130420': { icon: 'icons/nagai/12-2.svg', color: '#C75746', bcolor: '#D33673' },
  '20130430': { icon: 'icons/nagai/13-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20130500': { icon: 'icons/nagai/14-1.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130510': { icon: 'icons/nagai/14-1.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130600': { icon: 'icons/nagai/15-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20130610': { icon: 'icons/nagai/15-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20130620': { icon: 'icons/nagai/16-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20130700': { icon: 'icons/nagai/17-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130710': { icon: 'icons/nagai/17-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130800': { icon: 'icons/nagai/18-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130810': { icon: 'icons/nagai/18-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130820': { icon: 'icons/nagai/19-1.svg', color: '#C75746', bcolor: '#938626' },
  '20130830': { icon: 'icons/nagai/20-1.svg', color: '#C75746', bcolor: '#938626' },
  '20130840': { icon: 'icons/nagai/21-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20130850': { icon: 'icons/nagai/22-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20130900': { icon: 'icons/nagai/23-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20130910': { icon: 'icons/nagai/23-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20131000': { icon: 'icons/nagai/24-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20131010': { icon: 'icons/nagai/24-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20131020': { icon: 'icons/nagai/25-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20131030': { icon: 'icons/nagai/26-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131040': { icon: 'icons/nagai/27-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131050': { icon: 'icons/nagai/28-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131100': { icon: 'icons/nagai/29-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131110': { icon: 'icons/nagai/29-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131200': { icon: 'icons/nagai/30-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131210': { icon: 'icons/nagai/30-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131300': { icon: 'icons/nagai/31-1.svg', color: '#C75746', bcolor: '#790586' },
  '20131310': { icon: 'icons/nagai/31-1.svg', color: '#C75746', bcolor: '#790586' },

  '20140100': { icon: 'icons/nagai/1-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20140110': { icon: 'icons/nagai/1-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20140200': { icon: 'icons/nagai/2-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20140210': { icon: 'icons/nagai/2-1.svg', color: '#C75746', bcolor: '#935B3B' },
  '20140220': { icon: 'icons/nagai/3-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20140230': { icon: 'icons/nagai/4-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20140240': { icon: 'icons/nagai/5-1.svg', color: '#C75746', bcolor: '#0AB971' },
  '20140250': { icon: 'icons/nagai/6-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140260': { icon: 'icons/nagai/7-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140300': { icon: 'icons/nagai/8-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140310': { icon: 'icons/nagai/8-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140320': { icon: 'icons/nagai/9-1.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140330': { icon: 'icons/nagai/10-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20140400': { icon: 'icons/nagai/11-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20140410': { icon: 'icons/nagai/11-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20140420': { icon: 'icons/nagai/12-2.svg', color: '#C75746', bcolor: '#D33673' },
  '20140430': { icon: 'icons/nagai/13-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20140500': { icon: 'icons/nagai/14-1.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20140510': { icon: 'icons/nagai/14-1.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20140600': { icon: 'icons/nagai/15-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20140610': { icon: 'icons/nagai/15-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20140620': { icon: 'icons/nagai/16-1.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20140700': { icon: 'icons/nagai/17-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20140710': { icon: 'icons/nagai/17-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20140800': { icon: 'icons/nagai/18-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20140810': { icon: 'icons/nagai/18-1.svg', color: '#C75746', bcolor: '#EC2406' },
  '20140820': { icon: 'icons/nagai/19-1.svg', color: '#C75746', bcolor: '#938626' },
  '20140830': { icon: 'icons/nagai/20-1.svg', color: '#C75746', bcolor: '#938626' },
  '20140840': { icon: 'icons/nagai/21-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20140850': { icon: 'icons/nagai/22-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20140900': { icon: 'icons/nagai/23-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20140910': { icon: 'icons/nagai/23-1.svg', color: '#C75746', bcolor: '#C75746' },
  '20141000': { icon: 'icons/nagai/24-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20141010': { icon: 'icons/nagai/24-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20141020': { icon: 'icons/nagai/25-1.svg', color: '#C75746', bcolor: '#D33673' },
  '20141030': { icon: 'icons/nagai/26-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141040': { icon: 'icons/nagai/27-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141050': { icon: 'icons/nagai/28-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141100': { icon: 'icons/nagai/29-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141110': { icon: 'icons/nagai/29-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141200': { icon: 'icons/nagai/30-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141210': { icon: 'icons/nagai/30-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141300': { icon: 'icons/nagai/31-1.svg', color: '#C75746', bcolor: '#790586' },
  '20141310': { icon: 'icons/nagai/31-1.svg', color: '#C75746', bcolor: '#790586' }

};


