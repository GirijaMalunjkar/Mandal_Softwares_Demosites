<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$data['page']='Home';

		$this->load->view('header',$data);
		$this->load->view('index');
		$this->load->view('footer');
	}
	public function about()
	{
		$data['page']='About';

		$this->load->view('header',$data);
		$this->load->view('about');
		$this->load->view('facts');
		$this->load->view('team');
		$this->load->view('footer');
	}
	public function service()
	{
		$data['page']='Services';

		$this->load->view('header',$data);
		$this->load->view('service');
		$this->load->view('footer');
	}
	public function project()
	{
		$data['page']='project';

		$this->load->view('header',$data);
		$this->load->view('project');
		$this->load->view('footer');
	}
	public function feature()
	{
		$data['page']='feature';

		$this->load->view('header',$data);
		$this->load->view('feature');
		$this->load->view('facts');
		$this->load->view('featurehome');
		$this->load->view('footer');
	}
	public function quote()
	{
		$data['page']='quote';

		$this->load->view('header',$data);
		$this->load->view('quote');
		$this->load->view('footer');
	}
	public function team()
	{
		$data['page']='team';

		$this->load->view('header',$data);
		$this->load->view('team');
		$this->load->view('footer');
	}
	public function testimonial()
	{
		$data['page']='testimonial';

		$this->load->view('header',$data);
		$this->load->view('testimonial');
		$this->load->view('footer');
	}
	public function contact()
	{
		$data['page']='contact';

		$this->load->view('header',$data);
		$this->load->view('contact');
		$this->load->view('footer');
	}
}
