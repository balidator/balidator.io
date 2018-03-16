#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

from balidator import *
from ethereum.utils import check_checksum
from libs.bitcoin import validate_btc
from libs.ripple import validate_ripple_address
from libs.monero import validate_monero_address

# SET SECRET KEY FOR SESSIONS, ETC
# WE ARE USING OS.URANDOM() FUNCTION FOR THIS
app.secret_key = os.urandom(24)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ethereum')
def ethereum():
    return render_template('ethereum.html')


@app.route('/bitcoin')
def bitcoin():
    return render_template('bitcoin.html')


@app.route('/ripple')
def ripple():
    return render_template('ripple.html')


@app.route('/monero')
def monero():
    return render_template('monero.html')

@app.route('/api/documentation')
def api_documentation():
	return render_template('api-documentation.html')

@app.route('/api/<coin>/<address>', methods=['GET'])
def api(coin, address):
	if coin == 'bitcoin':
		if not address:
			return "Please enter an address"

		valid = validate_btc(address)

		if valid:
			return jsonify({'blockchain': coin, 'valid_address': True})
		if not valid:
			return jsonify({'blockchain': coin, 'valid_address': False})

	if coin == 'ethereum':
		if not address:
			return "Please enter an address"
		try:
			check_checksum(address)
			valid = True
		except:
			valid = False
			
		return jsonify({'blockchain': coin, 'valid_address': valid})

	if coin == 'ripple':
		if not address:
			return "Please enter an address"

		valid = validate_ripple_address(address)

		if valid:
			return jsonify({'blockchain': coin, 'valid_address': True})
		if not valid:
			return jsonify({'blockchain': coin, 'valid_address': False})

		return 'ripple'

	if coin == 'monero':
		if not address:
			return "Please enter an address"
			
		valid = validate_monero_address(address)

		if valid:
			return jsonify({'blockchain': coin, 'valid_address': True})
		if not valid:
			return jsonify({'blockchain': coin, 'valid_address': False})

		return 'ripple'
		return 'monero'

	return 'NO REQUEST MADE'
